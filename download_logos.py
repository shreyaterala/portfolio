import os
import requests

import time

logos = {
    "jhu": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Johns_Hopkins_University_logo.svg/500px-Johns_Hopkins_University_logo.svg.png",
    "gt": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg/500px-Georgia_Tech_Yellow_Jackets_logo.svg.png",
    "amazon": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/500px-Amazon_logo.svg.png",
    "rockwell": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Rockwell_Automation_logo.svg/500px-Rockwell_Automation_logo.svg.png",
    "siemens": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/500px-Siemens-logo.svg.png"
}

output_dir = "assets/logos"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
}

for name, url in logos.items():
    filepath = os.path.join(output_dir, f"{name}.png")
    if os.path.exists(filepath) and os.path.getsize(filepath) > 0:
        print(f"Skipping {name} (already exists)")
        continue

    try:
        print(f"Downloading {name}...")
        time.sleep(2) # Be nice to servers
        response = requests.get(url, headers=headers, stream=True, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Saved {name} to {filepath}")
        else:
            print(f"Failed to download {name}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {name}: {e}")
