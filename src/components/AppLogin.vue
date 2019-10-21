<template>
    <div class="loginPage">
        <template v-if="!online">
            <h1>Welcome!</h1>
            <div class="login">
                <div class="input">
                    <span class="input__name">Username</span>
                    <input type="text" 
                        class="input__value"
                        v-model="user"
                        @blur="unfocus()"
                        @click="select($event)"/>
                </div>
                <div class="input">
                    <span class="input__name">Password</span>
                    <input type="text" 
                        class="input__value"
                        v-model="password"
                        @blur="unfocus()"
                        @click="select($event)"/>
                </div>
                <input type="button" 
                    class="btn btn-success" 
                    value="Log In" 
                    @click="checkUser()"
                    />
            </div>
            {{user}}
            {{password}}
        </template>
        <template v-if="online">
            <h1>Hello {{user}}!</h1>
        </template>
    </div>
</template>

<script>
import {CHECK_USER} from '../constants';

export default {
    data() {
        return {
            user: "",
            password: "",
            spans: [],
            online: false,
        }
    },
    mounted() {
        this.spans = this.$el.querySelectorAll(".input__name");
    },
    methods: {
        select(e) {
            this.unfocus();
            e.target.previousElementSibling.classList.add("input__nameActive");
        },
        unfocus() {
            for (let i = 0; i < this.spans.length; i++) {
                this.spans[i].classList.remove("input__nameActive");
            }    
        },
        checkUser() {
            this.$store.dispatch({
                type: CHECK_USER,
                payload: [
                    {user: this.user}, 
                    {password: this.password}
                ]
            })
            .then(res => {
                if (this.$store.state.login) {
                    this.online = true;
                }
            })
        }
    },
}
</script>

<style scoped>
    .loginPage {
        margin-top: 30px;
    }
    .login {
        margin: 30px 0;
    }
    .input {
        position: relative;
    }
    .input {
        margin-bottom: 10px;
    }
    .input__name {
        position: absolute;
        left: 10px;
        top: 5px;
        color: #777;
        transition: ease 0.3s font-size, ease 0.3s left, ease 0.3s top;
        z-index: -1;
    }
    .input__nameActive {
        font-size: 0.8em;
        top: -15px;
        left: 5px;
        transition: ease 0.3s font-size, ease 0.3s left, ease 0.3s top;
    }
    .input__value {
        border: 1px solid;
        border-radius: 8px;
        padding: 4px;
        margin-bottom: 10px;
        background: transparent;
    }
</style>