class Thermostat {
  constructor(scale) {
    this._scale = scale;
  }

  get temperature() {
    return (this._scale - 32) * 5 / 9;
  }

  set temperature(updateScale) {
    this._scale = (updateScale * 9) / 5 + 32
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius