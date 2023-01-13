function App(s: string, t: string): boolean {
  type Mapping = {
    [key: string]: string;
  };
  const map: Mapping = {};

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] in map) {
      if (map[s[i]] !== t[i]) return false;
    } else {
      if (Object.values(map).includes(t[i]) && s[i] !== map[t[i]]) return false;
      map[s[i]] = t[i];
    }
  }
  return true;
}

console.log(App("bbbaaaba", "aaabbbba"));

module.exports = App;
// "bbbaaaba", "aaabbbba"
