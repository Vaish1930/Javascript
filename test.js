class OperatingSystem {
    constructor(type, version) {
      this.type = type;
      this.version = version;
    }
    login() {
      console.log(`${type} is loggin with ${version}`);
    }
    shutDown() {
      console.log(`${type} is shutting down`);
    }
    terminal() {
      console.log("Initializing");
    }
  }
  
  class WindowOS extends OperatingSystem {
    constructor(version) {
      super("windows", version);
    }
  
    msWord() {
      console.log(`Ms word is running on ${this.type}`);
    }
  
    valorant() {
      console.log("select your agent");
    }
  
    chrome() {
      console.log(`running Yt on chrome ${this.version}`);
    }
  }
  
  class MacOs extends OperatingSystem {
    constructor(version) {
      super("MacOs", version);
    }
    safari() {
      console.log(`Opening Safari on ${this.type}`);
    }
  }
  
  class Linux extends OperatingSystem {
    constructor(version) {
      super("Linux", version);
    }
  
    libreOffice() {
      console.log(`libre is running on ${this.version}`);
    }
  }
  
  const os = new WindowOS("10.0");
  
  os.msWord();
  
  const macOS = new MacOs("12");
  
  macOS.safari();
  
  new Linux("31").libreOffice();
  