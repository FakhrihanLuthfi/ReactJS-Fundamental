import { useState, useEffect } from 'react';

const LifecycleExample = () => {
  const [count, setCount] = useState(0); // Inisialisasi state `count` dengan nilai 0

  useEffect(() => {
    // Kode ini akan dijalankan setiap kali komponen di-render (mount) atau state `count` berubah
    console.log('Komponen di-mount atau di-update. Count:', count);

    // Fungsi ini akan dipanggil untuk membersihkan efek sebelum komponen di-unmount atau sebelum efek berikutnya dijalankan
    return () => {
      console.log('Membersihkan sebelum efek berikutnya atau saat komponen di-unmount.');
    };
  }, [count]); // `useEffect` ini hanya dijalankan jika `count` berubah

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleExample;
