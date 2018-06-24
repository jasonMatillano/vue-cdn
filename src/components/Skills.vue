<!----------------------------------------template------------------------------------------------>
<template>
<div>
  <div id="list-complete-demo" class="holder">
    <p>{{items}}</p>
    <form @submit.prevent="add">
      <input type="text" v-model="input1">
      <transition name="alert-in" enter-active-class="animated wobble" leave-active-class="animated bounceOut"> 
            <p class="alert" v-if="input1.length<8 && input1.length!=0"> 
              Input should have a minimum of 8 characters 
            </p>
          </transition>
    </form>

    <ul>
    <transition-group name="list-complete" enter-active-class="animated bounceInDown" leave-active-class="animated bounceOut" >
      <li
        v-for="(item, index) in items"
        v-bind:key="item"
        class="list-complete-item"
      >
        {{ item }}
        <i v-on:click="remove(index)">remove</i>
      </li>
    </transition-group>
    </ul>

    <p>These are the skills that you possess.</p>
  </div>
    </div>
</template>
<!----------------------------------------script------------------------------------------------>
<script>
export default {
  data() {
    return{
      input1: '',
      items: [
        'Java',
        'My Sql',
        'JS',
        'HTML',
        'CSS',
        'PHP',
        'XAMP',
        'Vue',
      ],
    }     
  },
    methods: {

    add: function () {
      this.items.splice(0, 0, this.input1);
      this.input1 = '';
    },

    remove: function (ind) {
      this.items.splice(ind, 1);
    },

    shuffle: function () {
      this.items = _.shuffle(this.items);
    },
  },
}
</script>
<!----------------------------------------Style------------------------------------------------>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";

.list-complete-item {
  transition: all 1s;
  display: block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
/*---------------added-----------------*/

  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li   {
    padding: 20px;
    font-size: 1.3em;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
    padding: 30px 0;
    color: gray;
  }
  .container {
    box-shadow: 0px 0px 40px lightgray;
  }
  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }
  .alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
  .alert-in-enter-active {
    animation: bounce-in .5s;
  }
  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
i {
  float:right;
  cursor:pointer;
  background:none;
  border:none;
  font-size:1em;
  color:rgb(255, 0, 21);
}

</style>
