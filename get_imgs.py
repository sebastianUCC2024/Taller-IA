import urllib.request, re, json
import urllib.parse

def search_image(query):
    try:
        url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req).read().decode('utf-8')
        links = re.findall(r'href="\?uddg=(.*?)"', res)
        for link in links:
            decoded = urllib.parse.unquote(link)
            if any(ext in decoded.lower() for ext in ['.jpg', '.png', '.jpeg']):
                print(f"{query}: {decoded}")
                return
    except Exception as e:
        print(f"Error {query}: {e}")

search_image("Kaworu Nagisa Neon Genesis Evangelion anime wallpaper filetype:jpg")
search_image("Asuka Langley Soryu Neon Genesis Evangelion anime wallpaper filetype:jpg")
search_image("Rei Ayanami Neon Genesis Evangelion anime wallpaper filetype:jpg")
search_image("Evangelion Unit 01 Neon Genesis Evangelion anime wallpaper filetype:jpg")
search_image("Nerv Logo Evangelion anime filetype:png")
search_image("Evangelion manga panel filetype:jpg")
