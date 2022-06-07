import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

function StartFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyDmiKeTMeQLU2fnDMx88WU5FsYSo5Y7XEY",
        authDomain: "prisms-laundry-recorder.firebaseapp.com",
        databaseURL: "https://prisms-laundry-recorder-default-rtdb.firebaseio.com",
        projectId: "prisms-laundry-recorder",
        storageBucket: "prisms-laundry-recorder.appspot.com",
        messagingSenderId: "358277480702",
        appId: "1:358277480702:web:c7ce263408387f3d1ea5af",
        measurementId: "G-2NSBNZQTR4"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      
      return getDatabase(app);
}

export default StartFirebase;