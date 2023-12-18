<template>
  <div>
    <!-- Display social media icons -->
    <div class="social-icons">
      <a href="https://www.facebook.com" target="_blank" class="social-icon">
        <i class="fab fa-facebook"></i>
      </a>
      <a href="https://www.twitter.com" target="_blank" class="social-icon">
        <i class="fab fa-twitter"></i>
      </a>
      <!-- Add more social media icons as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialMediaIcons',
};
</script>

<style scoped>
/* Add styles for social media icons container */
.social-icons {
  display: flex;
}

/* Style for individual social media icons */
.social-icon {
  margin-right: 10px;
  font-size: 24px;
  color: #333; /* Change the color as needed */
  text-decoration: none;
}

.social-icon:hover {
  color: #0074cc; /* Change the hover color as needed */
}
</style>

