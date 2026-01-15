
import os
import requests

# Extended image data from deep extraction
# Structure: "filename_suffix": "url"
# I will map them to "projectname_1", "projectname_2" etc.
image_data = {
  # ... (previous images - kept for reference, but keys might change to be more consistent)
  "profile": "https://foremost-tumble-c4f.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F445a6413-2ed1-4f4f-80e1-114dc4e4b5bb%2Fbe1899ba-a959-4cd5-8dac-2ce5ba507b09%2FIMG_0042.jpg?id=10ef0849-6609-80d0-998a-e8dae89c4d23&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=250&userId=&cache=v2",
  
  # Haptic Museum (3 images)
  "haptic_museum_main": "https://foremost-tumble-c4f.notion.site/image/attachment%3A5daa99cb-b192-44fe-9914-96075ac7382f%3AIMG_1573.jpeg?id=28bf0849-6609-804d-a80c-c71194a348f7&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",
  "haptic_museum_cad": "https://foremost-tumble-c4f.notion.site/image/attachment%3A301d7588-9a95-4eb5-9c06-07a836fbfb27%3Apin_array_cad.png?id=df1a9657-36e3-4f5a-b615-5c1a7114d59a&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",
  "haptic_museum_proto": "https://foremost-tumble-c4f.notion.site/image/attachment%3Ac80e26ce-830d-4521-8914-c66e24ace049%3Apin_array_image.png?id=494f6f87-0b1a-4d78-b12e-1317d7275811&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # Amputee Sock (1 main)
  "compression_sock": "https://foremost-tumble-c4f.notion.site/image/attachment%3A4d974453-f80d-4451-8dc3-ec1c39248fcb%3AScreenshot_2025-09-26_131340.jpg?id=14df0849-6609-804b-907f-f3f0c68a3737&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # RUBI (1 main)
  "rubi_cube": "https://foremost-tumble-c4f.notion.site/image/attachment%3A0237533f-fbf0-4932-ba8c-4b169d401a29%3ARUBI.jpg?id=15ef0849-6609-80d7-96ca-c6233598e0e4&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # breathSense (1 main)
  "breath_sense": "https://foremost-tumble-c4f.notion.site/image/attachment%3Aa4db8bb5-fff9-497a-b460-ce221810a3f2%3AIMG_0775.jpeg?id=15ef0849-6609-803d-9163-e6d063972b5a&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # EWB Nepal (1 main)
  "ewb_nepal": "https://foremost-tumble-c4f.notion.site/image/attachment%3Ab1051f1e-01d0-4b2a-8c39-85501d8aec4b%3AIMG_0778.jpeg?id=167f0849-6609-80d0-93ef-df0c116e747d&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # Fluids (1 main)
  "fluids_betz": "https://foremost-tumble-c4f.notion.site/image/attachment%3Ada88cab6-f227-4dad-a920-f90fab36c306%3AFinal_Presentation_2.webp?id=27af0849-6609-8016-ae90-d62e30816e6a&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # Flight Price (1 main)
  "flight_price_predictor": "https://foremost-tumble-c4f.notion.site/image/attachment%3A41239204-5a5d-4b0b-ab9f-12a74f6f6001%3Aml_model.png?id=10ef0849-6609-80ec-883a-db2533a2e49d&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # EPIC Lab (1 main)
  "epic_lab_research": "https://foremost-tumble-c4f.notion.site/image/attachment%3Ada78ba01-c750-4f53-8e18-0889398a7bc0%3AIMG_0025.jpeg?id=fdafd231-d70a-4ddf-bb04-5b0fc4115296&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # Grocery (1 main)
  "grocery_jackets": "https://foremost-tumble-c4f.notion.site/image/attachment%3Ad0b14127-f415-4815-8bc9-60943fa5b43c%3AIMG_0780.jpeg?id=10ef0849-6609-80b5-8bdf-e4dd2ed0dc2a&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # ME2110 (1 main)
  "me2110_robot": "https://foremost-tumble-c4f.notion.site/image/attachment%3A4e62fc50-2757-4b83-8c62-d394b2f1bbf9%3AWhatsApp_Image_2025-10-13_at_15.02.49_cb24875c.jpg?id=10ef0849-6609-8097-b34a-f521f6558415&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # EWB Malawi (1 main)
  "ewb_malawi": "https://foremost-tumble-c4f.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F445a6413-2ed1-4f4f-80e1-114dc4e4b5bb%2F48c68d50-5d3e-4d41-9e41-de687cfd2de9%2FWhatsApp_Image_2022-04-08_at_2.18.21_PM.jpeg?id=beb7733f-8625-4f52-9dd3-b1f25bfbfcfd&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2",

  # Battlebot (1 main)
  "battlebot_insaniti": "https://foremost-tumble-c4f.notion.site/image/attachment%3Ac69b0f59-2c18-42dd-9239-cd4b1304b680%3AIMG_0781.jpeg?id=79ceb8a5-df4b-458f-bf0d-637b6c8b527b&table=block&spaceId=445a6413-2ed1-4f4f-80e1-114dc4e4b5bb&width=640&userId=&cache=v2"
}

output_dir = "assets"
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

for name, url in image_data.items():
    try:
        if not url:
            continue
            
        # Determine extension
        ext = ".jpg"
        if ".png" in url:
            ext = ".png"
        elif ".webp" in url:
            ext = ".webp"
            
        filename = f"{name}{ext}"
        filepath = os.path.join(output_dir, filename)
        
        # Don't re-download if exists and size > 0 to save time, unless user forces but we'll overwrite for now
        # print(f"Downloading {name}...")
        
        response = requests.get(url, stream=True)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            print(f"Saved {name} to {filepath}")
        else:
            print(f"Failed {name}: {response.status_code}")
            
    except Exception as e:
        print(f"Error {name}: {e}")
