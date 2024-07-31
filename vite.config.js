
export default {
  // กำหนด directory ที่ใช้เป็น root ของโปรเจกต์
  root: '.',

  // กำหนด base path สำหรับการสร้างไฟล์ build
  base: './',

  // กำหนดการตั้งค่าสำหรับการสร้างไฟล์ build
  build: {
    outDir: 'dist', // กำหนด directory สำหรับไฟล์ build ที่สร้างขึ้น
  },

  // การตั้งค่าเซิร์ฟเวอร์
  server: {
    host: true,
    port: 5173, // This is the port which we will use in docker
    // Thanks @sergiomoura for the window fix
    // add the next lines if you're using windows and hot reload doesn't work
     watch: {
       usePolling: true
     }
  },
};