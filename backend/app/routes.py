from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend (React) to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dummy data
users = [
    {"id": 1, "name": "Zain"},
    {"id": 2, "name": "Ali"},
]

# Home route
@app.get("/")
def read_root():
    return {"message": "Backend is running 🚀"}

# Get all users
@app.get("/users")
def get_users():
    return users

# Add user
@app.post("/users")
def add_user(user: dict):
    users.append(user)
    return {"message": "User added", "user": user}