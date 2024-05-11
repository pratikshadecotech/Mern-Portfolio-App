const sendEmailController = (req,res) =>{
    try{
        return res.status(200).send({
            success:true,
            message:'Your message send successfully',
        });
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Send email api error',
            error
        });
    }
};

module.exports = { sendEmailController };