module.exports = function (pool) {

    async function totalTripCount() {

    }

    async function findAllRegions() {
        let arr = [];
        const allRegion = await pool.query(`select * from region`);

        allRegion.rows.forEach(element => {
            arr.push(element.name)
        });

        return arr
    }

    async function findTaxisForRegion(region) {
        const taxiForRegion = await pool.query(`select * from where name = ${region}`)
        
    }


    async function findTripsByRegNumber() {

    }

    async function findTripsByRegion() {

    }

    async function findIncomeByRegNumber() {

    }

    async function findTotalIncomePerTaxi() {

    }

    async function findTotalIncome() {

    }

    async function findTotalIncomeByRegion() {

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