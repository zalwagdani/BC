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
        <button @click="generateVCard" class="save-button">Save Contact</button>
      </div>
      <div class="footer">
        <p>Implemented by Ziyad</p>
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
      name: "Ziyad Al-Wagdani",
      firstName: "Ziyad",
      lastName: "Al-Wagdani",
      position: "Automation Engineer",
      company: "Rua Almadinah",
      email: "z.wagdani@ruaalmadinah.com",
      phone: "+966559968801",
      linkedin: "https://www.linkedin.com/in/zalwagdani/",
      // Photo URL (change to your own photo URL)
      photo:
        "https://media.licdn.com/dms/image/v2/D4E03AQEALGKhXYJ71w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730799949354?e=1743033600&v=beta&t=HlmmpvVuVgBkzZ9oEuZtEb4Nbnl4l29FynaTCnmgIQ8",
    };
  },
  methods: {
    generateVCard() {
      const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${this.name} 
N:${this.lastName};${this.firstName};;;
ORG:${this.company}
TEL:${this.phone}
EMAIL:${this.email}
URL:${this.linkedin}
PHOTO;VALUE=URI:${this.photo}
END:VCARD
      `;

      // Create a Blob from the vCard data
      const blob = new Blob([vCardData], { type: "text/vcard" });

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${this.name}_business_card.vcf`; // Set the file name
      link.click(); // Trigger the download
    },
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
  padding-top: 30px;
  width: 400px;
  text-align: center;
}

.photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: contain;
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
  color: #5878aa;
  text-decoration: none;
  margin-bottom: 5px;
}

.contact a:hover {
  text-decoration: underline;
  color: #6796de;
}

.save-button {
  margin-top: 20px;
  width: 200px;
  padding: 10px 20px;
  background-color: #5878aa;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.save-button:hover {
  background-color: #6796de;
}

/* Footer styling */
.footer {
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 10px;
  color: #888;
}
</style>
