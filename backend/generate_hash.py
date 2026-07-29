from utils.password import hash_password

password = "your_password_here"

hashed_password = hash_password(password)

print("Original Password:", password)
print("Hashed Password:", hashed_password)