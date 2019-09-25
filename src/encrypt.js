export default function encrypt(str) {
  if (!str) {
    return "";
  }

  let ret = "";
  let key = "V587";
  let k = 10000;

  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    k = (k + 1) % key.length;
    c = c ^ key.charCodeAt(k);

    ret += String.fromCharCode(c);
  }

  return ret;
}
