import sys
try:
    from rembg import remove
    from PIL import Image
    
    input_path = sys.argv[1]
    output_path = sys.argv[2]
    
    input_img = Image.open(input_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    print("Success")
except Exception as e:
    print(f"Error: {e}")
