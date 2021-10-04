<template>
  <div class="column is-half">
    <form>
      <div class="field">
        <label class="label" for="title">Title</label>
        <div class="control">
          <input
            v-model="form.title"
            id="title"
            name="title"
            class="input"
            type="text"
            placeholder="Provide a short description or name for your resource."
          />
        </div>
        <p v-show="errors.title" class="help is-danger">
          Name field must have at most 32 characters. E.g., Fast API
        </p>
      </div>

      <div class="field">
        <label class="label" for="link">Link</label>
        <div class="control">
          <input
            v-model="form.link"
            id="link"
            name="link"
            class="input"
            type="url"
            placeholder="Where in the web can we find more information about the resource."
          />
        </div>
        <p v-show="errors.link" class="help is-danger">
          Link must be a valid web address. E.g., https://fastapi.tiangolo.com
        </p>
      </div>

      <div class="field">
        <label class="label" for="description">Description</label>
        <div class="control">
          <textarea
            v-model="form.description"
            id="description"
            name="description"
            class="textarea"
            placeholder="Provide a lengthy description for the resource. E.g., what is the resource about?"
          ></textarea>
        </div>
        <p v-show="errors.description" class="help is-danger">
          A resource description must be at least 64 characters long.
        </p>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary" type="submit" v-on:click.prevent="createResource">
            Submit
          </button>
        </div>
        <div class="control">
          <button
            class="button is-warning is-light"
            v-on:click.prevent="clearForm"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useToast } from 'vue-toastification';
import { defaultToastEventBus } from '../../main.js';

const urlValidator = require('valid-url');
const slugify = require('slugify');
const toast = useToast(defaultToastEventBus);
const toastOptions = {
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: 'button',
  icon: true,
  rtl: false
};

const error = message => toast.error(message, toastOptions);
const success = message => toast.success(message, toastOptions);

export default {
  components: {},
  inject: ['onCreateResourceItem'],
  data() {
    return {
      form: this.new()
    };
  },
  computed: {
    errors() {
      return {
        title: this.form.title.length > 32,
        description:
          this.form.description.length > 0 && this.form.description.length < 64,
        link:
          this.form.link.length > 0 && !urlValidator.isWebUri(this.form.link)
      };
    }
  },
  methods: {
    clearForm() {
      this.form = this.new();
    },
    createResource() {
      if (this.errorsExist()) {
        error('Can not create a resource until all form errors are corrected.');
      } else {
        this.onCreateResourceItem({
          ...this.form,
          slug: `${slugify(this.form.title.toLowerCase())}-${Date.now()}`
        });
        this.clearForm();
        success("Successfully added new resource to 'Show resources' tab.");
      }
    },
    errorsExist() {
      for (const [key, value] of Object.entries(this.form)) {
        if (value === '' || this.errors[key]) {
          return true;
        }
      }

      return false;
    },
    new() {
      return {
        title: '',
        description: '',
        link: ''
      };
    }
  }
};
</script>
