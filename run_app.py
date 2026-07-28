import http.server
import socketserver
import webbrowser
import socket
import os
import sys

PORT = 8085

def get_lan_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def start_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    handler = NoCacheHandler
    
    port = PORT
    httpd = None
    for p in range(8085, 8100):
        try:
            httpd = socketserver.TCPServer(("", p), handler)
            port = p
            break
        except OSError:
            continue

    if not httpd:
        print("Could not find open port.")
        return

    with httpd:
        lan_ip = get_lan_ip()
        local_url = f"http://localhost:{port}"
        lan_url = f"http://{lan_ip}:{port}"
        
        print("================================================================")
        print("🥩 RECEPT MASTER PRO - SERVER IS RUNNING!")
        print("================================================================")
        print(f"💻 On this PC Computer, open: {local_url}")
        print(f"📱 On Android Tablet (same Wi-Fi), open: {lan_url}")
        print("================================================================")
        print("Press Ctrl+C in this terminal to stop the server.")
        print("================================================================")
        
        # Open in default browser automatically
        webbrowser.open(local_url)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server...")
            sys.exit(0)

if __name__ == '__main__':
    start_server()
