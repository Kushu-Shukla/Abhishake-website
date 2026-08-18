import urllib.request
import os

os.makedirs('public/logos', exist_ok=True)

logos = {
    'airindia.png': 'https://logo.clearbit.com/airindia.com',
    'indigo.png': 'https://logo.clearbit.com/goindigo.in',
    'flipkart.png': 'https://logo.clearbit.com/flipkart.com',
    'cleartrip.png': 'https://logo.clearbit.com/cleartrip.com',
    'freelancer.png': 'https://logo.clearbit.com/freelancer.com',
}

for name, url in logos.items():
    try:
        urllib.request.urlretrieve(url, f'public/logos/{name}')
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
