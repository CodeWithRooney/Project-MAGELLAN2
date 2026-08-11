"""add email verification

Revision ID: ce9b082cdd8b
Revises: dc5f416c621c
Create Date: 2026-08-10 22:08:59.478283

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.

revision: str = 'ce9b082cdd8b'
down_revision: Union[str, Sequence[str], None] = 'dc5f416c621c'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    """Upgrade schema."""

    op.add_column(
        'users',
        sa.Column(
            'email_verified',
            sa.Boolean(),
            nullable=False,
            server_default=sa.false(),
        ),
    )


def downgrade() -> None:
    """Downgrade schema."""

    op.drop_column(
        'users',
        'email_verified',
    )