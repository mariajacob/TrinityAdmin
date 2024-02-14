<!-- YourMainComponent.vue -->
<template>
    <v-card-text>
      <v-form ref="form">
        <!-- Course Name -->
        <v-text-field
          v-model="catName"
          label="Course Name"
          color="black"
          variant="outlined"
          required
          outlined
          class="custom-input"
        ></v-text-field>
  
        <!-- Course Description -->
        <v-textarea
          v-model="desc"
          label="Course Description"
          color="black"
          variant="outlined"
          required
          outlined
          class="custom-input"
        ></v-textarea>
  
        <!-- Edit and Delete Buttons
        <v-row>
          <v-col cols="6">
            <v-btn
              @click="openEditDialog"
              style="
                background-color: #2196F3; /* Blue color */
                color: #ffffff;
                width: 100%;
                height: 50px;
                margin-right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <v-icon>mdi-pencil</v-icon>
              <span class="white--text px-2">Edit Course</span>
            </v-btn>
          </v-col>
  
          <v-col cols="6">
            <v-btn
              @click="deleteCourse"
              style="
                background-color: #FF5252; /* Red color */
                color: #ffffff;
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <v-icon>mdi-delete</v-icon>
              <span class="white--text px-2">Delete Course</span>
            </v-btn>
          </v-col>
        </v-row>
   -->
        <!-- Include the EditForm component -->
        <edit-form
          :edit-dialog="editDialog"
          :cat-name="catName"
          :desc="desc"
          @close="editDialog = false"
          @save="saveEditedCourse"
        ></edit-form>
  
      </v-form>
    </v-card-text>
  </template>
  
  <script>
  import EditForm from "@/views/Course/editForm"; // Adjust the path based on your folder structure
  
  export default {
    components: {
      EditForm,
    },
    data() {
      return {
        editDialog: false,
        catName: null,
        desc: null,
        // ... other data properties
      };
    },
    methods: {
      openEditDialog() {
        this.editDialog = true;
      },
      saveEditedCourse(data) {
        // Implement logic to save the edited course details
        console.log("Save edited course:", data);
        // Perform any other necessary actions
        this.editDialog = false;
      },
      deleteCourse() {
        // Implement logic to delete the course
        console.log("Delete course");
        // Perform any other necessary actions
      },
    },
  };
  </script>
  