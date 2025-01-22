<template>
  <div id="app" class="business-card">
    <div class="card">
      <img class="photo" :src="photo" alt="Profile Photo" />
      <div class="info">
        <h1>{{ name }}</h1>
        <p class="title">{{ position }} at {{ company }}</p>
        <p class="contact">
          <a :href="'mailto:' + email">{{ email }}</a
          ><br />
          <a :href="'tel:' + phone">{{ phone }}</a
          ><br />
          <a :href="linkedin" target="_blank">LinkedIn</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      // Personal Information
      name: "John Doe",
      position: "Software Engineer",
      company: "Tech Innovators",
      email: "johndoe@example.com",
      phone: "+1234567890",
      linkedin: "https://www.linkedin.com/in/johndoe/",
      // Photo URL (change to your own photo URL)
      photo: "https://via.placeholder.com/150",
    };
  },
};
</script>

<style scoped>
/* Basic styles for the business card */
.business-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: center;
}

.photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.info h1 {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
}

.title {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

.contact a {
  display: block;
  color: #0073b1;
  text-decoration: none;
  margin-bottom: 5px;
}

.contact a:hover {
  text-decoration: underline;
}
</style>
