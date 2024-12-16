// 3 ta role boladi
// 1. admin
// 2. teacher
// 3. user

const registerUser = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "asd-admin1",
        password: "asd-admin1",
        firstname: "user test",
        lastname: "Murodillayev",
        group: "36-att-23",
        role: "admin",
      }),
    });

    if (!res.ok) {
      // Agar javob muvaffaqiyatli kelmagan bo'lsa, xatolikni qaytarish
      const errorData = await res.json();
      console.error("Error:", errorData);
      return;
    }

    const data = await res.json();
    console.log("User registered successfully:", data);
  } catch (error) {
    console.error("Network or server error:", error);
  }
};

registerUser();
