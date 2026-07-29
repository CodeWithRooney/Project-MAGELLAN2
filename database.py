from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# 1. This is the connection string. 
# It tells SQLAlchemy what type of database it is, the username, password, location, and database name.
# TODO: Replace 'your_password_here' with the actual password you created for pgAdmin.
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:25032008@localhost:5432/athena_db"

# 2. The Engine is responsible for actually establishing the connection to the database.
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# 3. The SessionLocal is a temporary workspace for your database operations.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 4. Base is a class that we will use later to create our database tables.
Base = declarative_base()




# 5. Testing the database connection
try:
    connection = engine.connect()
    print("Database connection successful! 🚀")
    connection.close()
except Exception as e:
    print(f"Error connecting to the database: {e}")