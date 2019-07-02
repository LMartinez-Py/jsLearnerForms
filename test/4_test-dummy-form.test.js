/* global salesReporterFactory, dataLoaderFactory, pointOfSaleDataUtilsFactory */

'use strict';

const assert = chai.assert;

function verifyOutput(actual, expected) {
    assert.equal(JSON.stringify(actual), JSON.stringify(expected));
}

function getDataSourceAccessFake(testData) {
    return {
        loadProductData: function() {
            return testData.productData;
        },

        loadTransactionTypes: function () {
            return testData.transactionTypes;
        },

        loadTransactionData: function () {
            return testData.transactionData;
        }
    };
}

describe('Test Dummy Form - Costume Shop Sales', function () {

    let pointOfSaleDataUtils;
    let salesReporter;
    let testData;

    beforeEach(function () {
        const transactionTypes = {
            Sale: 1,
            Return: 2
        };

        const productData = [
            {
                id: 1,
                name: 'Pirate Costume',
                price: 39.99
            }
        ];

        testData = {
            productData: productData,
            transactionTypes: transactionTypes,
            transactionData: []
        };

        const dataSourceAccess = getDataSourceAccessFake(testData);
        const dataLoader = dataLoaderFactory(dataSourceAccess);

        pointOfSaleDataUtils = pointOfSaleDataUtilsFactory(transactionTypes);
        salesReporter = salesReporterFactory(dataLoader);
    });

    describe('pointOfSaleDataUtils', function () {
        describe('getProductCountBySale', function () {

            it(
                'returns an empty object for sale counts if no sale data exists',
                function () {
                    const transactionData = [];

                    const productSaleCounts = pointOfSaleDataUtils.getProductCountBySale(transactionData);

                    assert.equal(JSON.stringify(productSaleCounts), '{}');
                }
            );

            it(
                'returns an object with a single count of 1 when only one item, quantity 1 was purchased',
                function () {
                    const transactionData = [
                        {
                            productId: 1,
                            quantity: 1,
                            transactionStatus: 1
                        }
                    ];

                    const productSalesCounts = pointOfSaleDataUtils.getProductCountBySale(transactionData);

                    const expectedSalesCounts = {
                        1: 1
                    };

                    verifyOutput(productSalesCounts, expectedSalesCounts);
                }
            );

            it(
                'returns an object with a single count of 2 when only one item, quantity 2 was purchased',
                function () {
                    const transactionData = [
                        {
                            productId: 1,
                            quantity: 2,
                            transactionStatus: 1
                        }
                    ];

                    const productSalesCounts = pointOfSaleDataUtils.getProductCountBySale(transactionData);

                    const expectedSalesCounts = {
                        1: 2
                    };

                    verifyOutput(productSalesCounts, expectedSalesCounts);
                }
            );

            it(
                'returns an object with a two counts of 1 when two transactions of 1 qty each are passed',
                function () {
                    const transactionData = [
                        {
                            productId: 1,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 2,
                            quantity: 1,
                            transactionStatus: 1
                        }
                    ];

                    const productSalesCounts = pointOfSaleDataUtils.getProductCountBySale(transactionData);

                    const expectedSalesCounts = {
                        1: 1,
                        2: 1
                    };

                    verifyOutput(productSalesCounts, expectedSalesCounts);
                }
            );

            it(
                'returns an object with a two counts when 4 transactions of two different items are passed',
                function () {
                    const transactionData = [
                        {
                            productId: 1,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 1,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 2,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 2,
                            quantity: 2,
                            transactionStatus: 1
                        }
                    ];

                    const productSalesCounts = pointOfSaleDataUtils.getProductCountBySale(transactionData);

                    const expectedSalesCounts = {
                        1: 2,
                        2: 3
                    };

                    verifyOutput(productSalesCounts, expectedSalesCounts);
                }
            );

            it(
                'returns counts only for sales, ignoring returns',
                function () {
                    const transactionData = [
                        {
                            productId: 1,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 2,
                            quantity: 1,
                            transactionStatus: 2
                        }
                    ];

                    const productSalesCounts = pointOfSaleDataUtils.getProductCountBySale(transactionData);

                    const expectedSalesCounts = {
                        1: 1
                    };

                    verifyOutput(productSalesCounts, expectedSalesCounts);
                }
            );
        });

        describe('getProductCountByReturn', function () {
            it(
                'returns with counts only for return transactions',
                function () {
                    const transactionData = [
                        {
                            productId: 1,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 1,
                            quantity: 3,
                            transactionStatus: 2
                        },
                        {
                            productId: 2,
                            quantity: 1,
                            transactionStatus: 1
                        },
                        {
                            productId: 2,
                            quantity: 4,
                            transactionStatus: 2
                        }
                    ];

                    const productSalesCounts = pointOfSaleDataUtils.getProductCountByReturn(transactionData);

                    const expectedSalesCounts = {
                        1: 3,
                        2: 4
                    };

                    verifyOutput(productSalesCounts, expectedSalesCounts);
                }
            );

        });
    });

    describe('sales report', function () {
        describe('getSalesReport', function () {
            it('should return a sales report with no sales', function () {
                const reportResult = salesReporter.getReport();
                const expectedResult = [];

                verifyOutput(reportResult, expectedResult);
            });

            it('should return a sales report with one sale', function () {
                testData.transactionData.push({
                    productId: 1,
                    quantity: 1
                });

                const reportResult = salesReporter.getReport();
                const expectedResult = [
                    {
                        productName: 'Pirate Costume',
                        quantity: 1,
                        total: 39.99
                    }
                ];

                verifyOutput(reportResult, expectedResult);
            });

            it('should return a sales report with two sales of different products', function () {
                testData.transactionData.push({
                    productId: 1,
                    quantity: 1
                });

                testData.transactionData.push({
                    productId: 2,
                    quantity: 1
                });

                const reportResult = salesReporter.getReport();
                const expectedResult = [
                    {
                        productName: 'Pirate Costume',
                        quantity: 1,
                        total: 39.99
                    },
                    {
                        productName: 'Robot Costume',
                        quantity: 1,
                        total: 59.99
                    }
                ];

                verifyOutput(reportResult, expectedResult);
            });
        });
    });

});