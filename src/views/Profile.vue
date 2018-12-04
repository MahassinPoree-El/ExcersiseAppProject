<template>
    <div class="profile">
        <h5>Your Profile</h5>
        
                <form>
                    Name:<br/>
                    <input id="yourName" value="" readonly><br/>
                    Email:<br/>
                    <input id="eM" value="" readonly><br/>
                    Total activities done:<br/>
                    Push-ups:
                    <input id="pUps" value="" readonly><br/>
                    Lunges:
                    <input id="lngs" value="" readonly><br/>
                    Miles:
                    <input id="miles" value="" readonly><br/>
                    Average calorie intake:
                    <input id="avgCal" value="" readonly><br/>
                </form>
    </div>
    
</template>
<style lang = "scss">
    @import "../../node_modules/bootstrap/scss/bootstrap.scss";

</style>

<script>
    import * as api from '@/services/api_access';
    export default 
    {
        data()
        {
            return
            {
                state:
                {
                    myExercise:""
                }
            }

        },
        addExercises(pushups, lunges, miles)
        {
            api.AddExercises(pushups, lunges, miles)
        },
        addCalories(cal)
        {
            api.AddCalories(cal);
        },
        getMyStats()
        {
            api.GetMyStats();
        }
        
    }
</script>

