<template>
    <div class="profile">
        <h5>Your Profile</h5>
    </div>
    
</template>
<style lang = "scss">
    @import "../../node_modules/bootstrap/scss/bootstrap.scss";

</style>

<script 
    import * as api from '@/services/api_access';
    export default 
    {
        data()
        {
            return
            {
                state:
                {
                    myCalories: ""
                }
            }

        },
        addCalories(cal)
        {
            api.AddCalories(cal);
        }
        
    }
</script>

