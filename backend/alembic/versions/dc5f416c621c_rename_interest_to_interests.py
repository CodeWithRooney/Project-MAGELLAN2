"""rename interest to interests

Revision ID: dc5f416c621c
Revises: dd1d9e2fd601
Create Date: 2026-08-10 21:25:33.708877

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'dc5f416c621c'
down_revision: Union[str, Sequence[str], None] = 'dd1d9e2fd601'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.alter_column(
        "profiles",
        "interest",
        new_column_name="interests",
    )


def downgrade() -> None:
    op.alter_column(
        "profiles",
        "interests",
        new_column_name="interest",
    )