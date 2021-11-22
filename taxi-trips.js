module.exports = function (pool) {

    async function totalTripCount(){ 
        
    }

    async function findAllRegions(){
        const allRegion = await pool.query(`select * from region`);
        console.log(">>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<< ",allRegion.rows)
        return allRegion.rows;
    }

    async function findTaxisForRegion(){
        const taxiForRegion = await pool.query(`select * `)
        
    }

    async function findTripsByRegNumber(){

    }

    async function findTripsByRegion(){

    }

    async function findIncomeByRegNumber(){

    }

    async function findTotalIncomePerTaxi(){
        
    }

    async function findTotalIncome(){

    }

    async function findTotalIncomeByRegion(){

    }

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }

}