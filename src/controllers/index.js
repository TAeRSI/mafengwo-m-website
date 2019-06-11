module.exports = {
    list(){
        $.ajax({
            url : '/api?category=get_info_flow_list&page=0',
            // 相当于success ：function(){}
            success(res){
                res = JSON.parse(res)
                console.log(res)
            }
            
        })
    }
}