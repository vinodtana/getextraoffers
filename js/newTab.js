function mysliderClick1() {
  mixpanel.track("image_clicks");
  window.open(
    "https://www.flipkart.com/search?q=top%20offers%20deals&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
  );
}
function mysliderClick() {
  mixpanel.track("slider_clicks");
  window.open("http://rasko.in/");
}
