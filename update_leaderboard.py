import requests
import os

def update_leaderboard(nickname, score, secret):
    url = "https://pookyskeekys.github.io/submitScore"

    data = {
        "nickname": nickname,
        "score": score
    }

    headers = {
        "Authorization": f"Bearer {secret}"
    }

    response = requests.post(url, data=data, headers=headers)

    if response.status_code == 200:
        print("Leaderboard updated successfully!")
    else:
        print(f"Failed to update leaderboard. Status code: {response.status_code}")

if __name__ == "__main__":
    nickname = os.getenv("NICKNAME")
    score = os.getenv("SCORE")
    secret = os.getenv("SECRET_1")

    update_leaderboard(nickname, score, secret)
