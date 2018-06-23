<!----------------------------------------template------------------------------------------------>
<template>
    <div>
      <div class="holder">
        <p>listOfSkills contains {{listOfSkills}}</p>

        <form @submit.prevent="addSkill()">
          <input type="text" placeholder="Enter your skill here..." v-model="skill">

          <transition name="alert-in" enter-active-class="animated wobble" leave-active-class="animated bounceOut"> 
            <p class="alert" v-if="skill.length<8 && skill.length!=0"> 
              Input should have a minimum of 8 characters 
            </p>
          </transition>
        </form>
        
        <ul>
         <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
           <li v-for="(skill1,index) in listOfSkills" v-bind:key="index">{{index}}. {{skill1[0]}}</li>
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
      skill: '',
      listOfSkills: [
        ["Vue.js"],
        ["Vue1.js"],
        ["Vue2.js"],],
    }     
  },
  methods: {
    addSkill() {
      if(this.skill.length<8)
      {
        //do nothing
      } else {
        this.listOfSkills.push([this.skill] );
        this.skill = '';
      }
    },
    remove(index_main,index_child) {
      console.log(index_main + " " + index_child);
      if (index_main == 1){
        this.listOfArrays.skills.splice(index_child,1);
      } else if (index_main == 2) {
        this.listOfArrays.dummys.splice(index_child,1);
      } else if (index_main == 3) {
        this.listOfArrays.yummys.splice(index_child,1);
      }
    },
  },
}
</script>
<!----------------------------------------Style------------------------------------------------>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
  .holder {
    background: #fff;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  
  ul li {
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
