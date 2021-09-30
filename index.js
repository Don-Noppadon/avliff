// Import stylesheets
import './style.css';

import liff from '@line/liff';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
//import { getFirestore } from 'firebase/firestore';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
} from 'firebase/firestore/lite';
//import { getFirestore, doc, getDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBY3ySD-bHbUiv2sysGEJP-YiD65BHCgVU',
  authDomain: 'avlineliff-a9c35.firebaseapp.com',
  projectId: 'avlineliff-a9c35',
  storageBucket: 'avlineliff-a9c35.appspot.com',
  messagingSenderId: '584951879654',
  appId: '1:584951879654:web:0272a2d048d906610ea827',
  measurementId: 'G-LNTJHG61FM',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

async function getdatafromdb() {
  const docRef = collection(db, '/lifftest/ao5JeK7SeK1TvAmTj58G');
  const docSnap = await getDocs(docRef);
  alert(docSnap);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
  /*
  alert(db);
  const citiesCol = collection(db, 'LIFFMember');
  alert(citiesCol);
  const citySnapshot = await getDocs(citiesCol);
  alert(citySnapshot);
  const cityList = citySnapshot.docs.data((doc) => doc.data());
  return cityList;
  */
}

const body = document.getElementById('body');
const userId = document.getElementById('userId');
const pictureUrl = document.getElementById('pictureUrl');
const displayName = document.getElementById('displayName');
const statusMessage = document.getElementById('statusMessage');
const accessToken = document.getElementById('accessToken');

const btnShare = document.getElementById('btnShare');
const btnRegister = document.getElementById('btnRegister');
const btnLogIn = document.getElementById('btnLogIn');
const btnLogOut = document.getElementById('btnLogOut');
const btnApi = document.getElementById('btnApi');
const btnApiPost = document.getElementById('btnApiPost');

const fuserId = document.getElementById('fuserId');
const fdisplayName = document.getElementById('fdisplayName');
const secLineDetail = document.getElementById('secLineDetail');
let profileLine;

async function main() {
  liff.ready.then(() => {
    /*
    if (liff.getOS() === 'android') {
      body.style.backgroundColor = '#888888';
    }
    */
    if (liff.isInClient()) {
      getUserProfile();

      document.getElementById('btnLogIn').style.display = 'none';
      document.getElementById('btnLogOut').style.display = 'none';
      document.getElementById('btnShare').style.display = 'block';
      document.getElementById('btnApi').style.display = 'block';
    } else {
      if (liff.isLoggedIn()) {
        getUserProfile();

        if (liff.isInClient()) {
          secLineDetail.hidden = fasle;
          document.getElementById('btnLogIn').style.display = 'none';
          document.getElementById('btnLogOut').style.display = 'none';
          document.getElementById('btnApi').style.display = 'block';
          document.getElementById('btnApiPost').style.display = 'block';
        } else {
          document.getElementById('btnLogIn').style.display = 'none';
          document.getElementById('btnLogOut').style.display = 'block';
          document.getElementById('btnApi').style.display = 'block';
          document.getElementById('btnApiPost').style.display = 'block';
        }
        document.getElementById('btnShare').style.display = 'block';
      } else {
        secLineDetail.hidden = true;
        document.getElementById('btnLogIn').style.display = 'block';
        document.getElementById('btnLogOut').style.display = 'none';
        document.getElementById('btnShare').style.display = 'none';
        document.getElementById('btnApi').style.display = 'none';
        document.getElementById('btnApiPost').style.display = 'none';
      }
    }
  });

  await liff.init({ liffId: '1655050259-lnja5368' });
}
main();

async function getUserProfile() {
  const profile = await liff.getProfile();
  profileLine = profile;
  pictureUrl.src = profile.pictureUrl;
  userId.innerHTML = '<b>User ID: </b>' + profile.userId;
  displayName.innerHTML = '<b>Display Name: </b>' + profile.displayName;
  statusMessage.innerHTML = '<b>Status : </b>' + profile.statusMessage;
  email.innerHTML = '<b>E-mail : </b>' + liff.getDecodedIDToken().email;
  accessToken.innerHTML = '<b>Access Token ID : </b>' + liff.getAccessToken();
  fuserId.innerHTML = '<input value=' + profile.userId + '>';
  fdisplayName.innerHTML = '<input value=' + profile.displayName + '>';
}

async function shareMsg() {
  const result = await liff.shareTargetPicker([
    {
      type: 'text',
      text: 'This msg was shared by LIFF',
    },
  ]);

  if (result) {
    alert('Message was shared!');
  } else {
    alert('Shared Target Picker was Cancelled by user');
  }

  //liff.closeWindow();
}

btnShare.onclick = () => {
  shareMsg();
};

btnLogIn.onclick = () => {
  logIn();
};

btnLogOut.onclick = () => {
  logOut();
};

btnApi.onclick = () => {
  GetMember();
};

btnApiPost.onclick = () => {
  getdatafromdb();
};
//btnApi.onclick = userAction();

function logOut() {
  liff.logout();
  window.location.reload();
}
function logIn() {
  liff.login({ redirectUri: window.location.href });
}
async function GetDataFromCloud() {
  /*
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic bHN1c2VyMDE6THMxMjM0NTY=');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  let response = await fetch(
    "https://sirivej-pharma:7048/BC160/ODataV4/Company('Sirivej%20Pharma%20Co.%2C%20Ltd.')/Job_List?$select=No,Description,Bill_to_Customer_No,Status,Person_Responsible,Search_Description,Project_Manager",
    requestOptions
  );
  */
  /*
  var myHeaders = new Headers();

  myHeaders.append(
    'Authorization',
    'Basic YWRtaW46TUVhcFdIMnN3RU4zRmJJcHRHdVFtc2wyajBFd3BYV3BuTXZWbjVuZHdCRT0='
  );
  myHeaders.append('Content-Type', 'application/json');
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  let response = await fetch(
    "https://api.businesscentral.dynamics.com/v2.0/7fb30016-58fe-4961-a491-3e5aa8eb3224/Sandbox/ODataV4/Company('CRONUS%20USA%2C%20Inc.')/Job_List?$select=No,Description,Bill_to_Customer_No,Status,Person_Responsible,Search_Description,Project_Manager",
    requestOptions
  );
  */

  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  let response = await fetch(
    "http://avision117:17058/BC170_2/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
    requestOptions
  );

  //let response = await fetch('people.json');
  let data1 = await response.json();
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  //console.log(data1);
  //console.log(err);
  //console.log(data1.value[0]['No']);
  //alert(data1.value[0]['No']);
  if (response.status == 200) {
    appendData(data1);
  } else {
    alert('Cannot Connect API');
  }
}

async function PostDataToCloud() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  var raw = JSON.stringify({
    EntryNo: '15',
    Description: 'อรทัย15',
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  let response = await fetch(
    "https://avision117:17058/BC170_2/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
    requestOptions
  );

  //let response = await fetch('people.json');
  let data1 = await response.json();
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  //console.log(data1);
  //console.log(err);
  //console.log(data1.value[0]['No']);
  //alert(data1.value[0]['No']);
  if (response.status == 201) {
    GetDataFromCloud();
  } else {
    alert('Cannot Insert Data');
  }
}

async function GetDataFromCloud() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  let response = await fetch(
    "https://avision117:17058/BC170_2/ODataV4/Company('CRONUS%20-%20LSVIP')/APILineEntry",
    requestOptions
  );

  //let response = await fetch('people.json');
  let data1 = await response.json();
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  //console.log(data1);
  //console.log(err);
  //console.log(data1.value[0]['No']);
  //alert(data1.value[0]['No']);
  if (response.status == 200) {
    appendData(data1);
  }
}

function appendData(data1) {
  //alert(data1);
  const aa = data1;
  var mainContainer = document.getElementById('mydata');
  mainContainer.innerHTML = '';
  for (var i = 0; i < aa.value.length; i++) {
    var div = document.createElement('div');
    div.innerHTML = `Job. No. ${aa.value[i]['EntryNo']} ${aa.value[i]['Description']}`;

    mainContainer.appendChild(div);
  }
}

async function CreateMember() {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');

  var raw = JSON.stringify({
    memberAccountNo: 'MA000013',
    memberName: 'สมหมาย',
    memberSurName: 'หายไป',
    dateOfBirth: '28/10/1991',
    sex: 'M',
    citizenID: '1234545454678',
    mobileNo: '0812345678',
    emailAddress: 'test@avision.co.th',
    address1: '22/33 อ.เมือง',
    city: 'เขตป้อมปราบศัตรูพ่าย',
    county: 'กรุงเทพฯ',
    postCode: '10100',
    regionCode: 'TH',
    consent1: 'TRUE',
    dateConsent1: '',
    consent2: 'TRUE',
    dateConsent2: '',
    consent3: 'TRUE',
    dateConsent3: '',
    consent4: 'TRUE',
    dateConsent4: '',
    apistoreRegister: 'ST001',
    lineUserID: profileLine.userId,
    createorupdate: 'UPDATE',
  });
  alert(raw);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  let response = await fetch(
    "https://avision117:17058/BC170_2/ODataV4/Company('CRONUS%20-%20LSVIP')/API_CreateUpdateMem_P",
    requestOptions
  );

  //let response = await fetch('people.json');
  let data1 = await response.json();
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  //console.log(data1);
  //console.log(err);
  //console.log(data1.value[0]['No']);
  //alert(data1.value[0]['No']);
  if (response.status == 201) {
    GetMember();
  } else {
    alert('Cannot Insert Data');
  }
}

async function GetMember() {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Basic dXNlcjAxOkxzMTIzNDU2');
  myHeaders.append('Content-Type', 'application/json');

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  let response = await fetch(
    "https://avision117:17058/BC170_2/ODataV4/Company('CRONUS%20-%20LSVIP')/API_GetMemInfo_G?$filter=memberAccountNo eq 'API000009'",
    requestOptions
  );

  //let response = await fetch('people.json');
  let data1 = await response.json();
  console.log(response.status); // 200
  console.log(response.statusText); // OK
  //console.log(data1);
  //console.log(err);
  //console.log(data1.value[0]['No']);
  //alert(data1.value[0]['No']);
  if (response.status == 200) {
    appendData(data1);
  }
}

function appendData(data1) {
  //alert(data1);
  const aa = data1;
  var mainContainer = document.getElementById('mydata');
  mainContainer.style.backgroundColor = '#011a5f';
  mainContainer.innerHTML = '';
  for (var i = 0; i < aa.value.length; i++) {
    var div = document.createElement('div');
    div.innerHTML = `Member No. ${aa.value[i]['memberAccountNo']} <br> Line ID. ${aa.value[i]['lineUserID']}  <br> Phone No. ${aa.value[i]['mobileNo']} <br> First Name. ${aa.value[i]['memberName']} <br> Last Name. ${aa.value[i]['memberSurName']}<br> Point Balance ${aa.value[i]['totalRemainingPoints']}`;

    mainContainer.appendChild(div);
  }
}
