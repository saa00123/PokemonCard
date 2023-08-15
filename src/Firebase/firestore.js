import app from "./firebase";

const firestore = app.firestore();

export default firestore;

// 아래는 사용자 인즈 이후에 사용할 규칙
// rules_version = '2';

// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /users/{userId} {
//       allow read, write: if request.auth.uid == userId;
//     }
//   }
// }
