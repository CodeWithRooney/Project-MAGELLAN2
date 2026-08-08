import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parent.parent))

import json
from pathlib import Path
from datetime import datetime

from database import SessionLocal
from models import Opportunity


def parse_deadline(deadline):
    if deadline is None:
        return None

    return datetime.strptime(deadline, "%Y-%m-%d").date()


def seed_database():
    db = SessionLocal()

    try:
        json_path = Path(__file__).parent / "opportunities.json"

        with open(json_path, "r", encoding="utf-8") as file:
            opportunities = json.load(file)

        added = 0
        skipped = 0

        for item in opportunities:

            exists = (
                db.query(Opportunity)
                .filter(Opportunity.title == item["title"])
                .first()
            )

            if exists:
                skipped += 1
                continue

            opportunity = Opportunity(
                category=item["category"],
                title=item["title"],
                provider=item["provider"],
                description=item["description"],
                eligibility=item["eligibility"],
                official_link=item["official_link"],
                deadline=parse_deadline(item["deadline"]),
                mode=item["mode"],
                location=item["location"],
                is_free=item["is_free"],
                tags=item["tags"],
                includes=item["includes"],
                benefit=item["benefit"],
            )

            db.add(opportunity)
            added += 1

        db.commit()

        print(f"Added: {added}")
        print(f"Skipped: {skipped}")

    except Exception as e:
        db.rollback()
        print(e)

    finally:
        db.close()


if __name__ == "__main__":
    seed_database()