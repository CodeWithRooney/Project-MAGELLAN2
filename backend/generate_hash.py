from utils.password import hash_password

password = "Magellan@123"

hashed_password = hash_password(password)

print("Original Password :", password)
print("Hashed Password   :", hashed_password)