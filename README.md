<h1>📱 Daily Fetal Movement Tracker (React Native)</h1>

<p>
A simple React Native application to track daily fetal movements.<br />
The app works completely <b>offline</b> and stores all data locally on the device.
</p>

<h2>🚀 How to Run the Project</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js (v16+ recommended)</li>
  <li>Expo CLI installed globally</li>
  <li>Android Emulator or Expo Go app on a physical device</li>
</ul>

<pre>
npm install -g expo-cli
</pre>

<h3>Steps to Run</h3>

<pre>
npm install
npx expo start
</pre>

<p>
Press <b>a</b> to run on Android emulator or scan the QR code using the <b>Expo Go</b> app.
</p>

<hr />

<h2>📦 Libraries Used</h2>

<ul>
  <li><b>react-native</b> – Core framework</li>
  <li><b>expo</b> – Simplified React Native setup</li>
  <li><b>@react-navigation/native</b> – Navigation support</li>
  <li><b>@react-navigation/native-stack</b> – Stack-based navigation</li>
  <li><b>@react-native-async-storage/async-storage</b> – Local data persistence</li>
  <li><b>expo-linear-gradient</b> – Gradient UI backgrounds</li>
</ul>

<hr />

<h2>🗂 Data Structure for Storing Records</h2>

<p>
All fetal movement sessions are stored locally using <b>AsyncStorage</b>.
</p>

<p><b>Storage Key:</b></p>

<pre>
dfm_records
</pre>

<p><b>Record Object Structure:</b></p>

<pre>
{
  id: string,           // Unique identifier (timestamp-based)
  minutes: number,      // Time taken for 10 kicks (in minutes)
  timestamp: number     // Date.now() value
}
</pre>

<p><b>Example Stored Data:</b></p>

<pre>
[
  {
    "id": "1767179863185",
    "minutes": 5,
    "timestamp": 1767179863185
  },
  {
    "id": "1767179549347",
    "minutes": 3,
    "timestamp": 1767179549347
  }
]
</pre>

<p>
Records are sorted by <b>latest first</b>.  
Day and date (Monday, Tuesday, etc.) are derived dynamically from the timestamp.
</p>

<hr />

<h2>🧠 Assumptions Made</h2>

<ul>
  <li>The app works fully offline with no backend</li>
  <li>Pixel-perfect UI is not mandatory, but layout and interactions follow the Figma design</li>
  <li>Only the time taken for 10 kicks is recorded</li>
  <li>Saved records persist until app storage is cleared</li>
  <li>Android is the primary target platform</li>
</ul>


