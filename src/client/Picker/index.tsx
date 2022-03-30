const loadPicker = (callback: any) => {
  const script = document.createElement("script");
  script.src = "https://api.playpickup.com/pickup-picker-v1.js";
  document.head.appendChild(script);
  script.id = "picker";
  const other = document.createElement("script");
  other.setAttribute("type", "text/javascript");
  //   let s = "function in_my_script(){ \n";
  //   s += "alert('test'); \n }";
  //   s += "\n in_my_script();";
  //   const t = "function in_my_script(){alert('test');}in_my_script();";
  const go =
    " window.pickup={ready:function(){return null}},window.puDataLayer=window.puDataLayer||[],function(){window.puDataLayer.push(...arguments)}('f39befcb-1b91-4ec1-95d7-9d00db67b6d9','109',!0)";
  other.innerHTML = go;
  document.head.appendChild(other);
  //   const ren = "pickup.ready(() => {pickup.render();});";
  //   const final = document.createElement("script");
  //   final.innerHTML = ren;
  //   document.body.appendChild(final);

  const body = document.createElement("div");
  body.setAttribute("class", "pickup-js-prop-picker");
  body.setAttribute("data-propid", "22520");
  document.body.appendChild(body);
  script.onload = () => {
    if (callback) callback();
  };
};

export default loadPicker;
