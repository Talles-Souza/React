import React from "react";

export const Carros = (props) => {
    return (<>

        <div class="container px-3 my-5 clearfix">

            <div class="card">
                <div class="card-header">
                    <h2>Lista de Itens</h2>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered m-0">
                            <thead>
                                <tr>

                                    <th class="text-center py-3 px-4" style={{ minWidth: '400px' }}>Nome do Produto &amp; Detalhes</th>
                                    <th class="text-right py-3 px-4" style={{ width: '100px' }}>Preço</th>
                                    <th class="text-center py-3 px-4" style={{ width: '120px' }}>Quantidade</th>
                                    <th class="text-right py-3 px-4" style={{ width: '100px' }}>Total</th>
                                    <th class="text-center align-middle py-3 px-0" style={{ width: '40px' }}><a href="/" class="shop-tooltip float-none text-light" title="" data-original-title="Clear cart"><i class="ino ion-md-trash"></i></a></th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td class="p-4">
                                        <div class="media align-items-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="d-block ui-w-40 ui-bordered mr-4" alt="" />
                                            <div class="media-body">
                                                <a href="/" class="d-block text-dark">Produto 1</a>
                                                <small>
                                                    <span class="text-muted">Cor:</span>
                                                    <span class="ui-product-color ui-product-color-sm align-text-bottom" style={{ background: '#e81e2c' }}></span> &nbsp;
                                                    <span class="text-muted">Size: </span> EU 37 &nbsp;
                                                    <span class="text-muted">Ships from: </span> China
                                                </small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right font-weight-semibold align-middle p-4">$57.55</td>
                                    <td class="align-middle p-4"><input type="text" class="form-control text-center" value="2" /></td>
                                    <td class="text-right font-weight-semibold align-middle p-4">$115.1</td>
                                    <td class="text-center align-middle px-0"><a href="/" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
                                </tr>

                                <tr>
                                    <td class="p-4">
                                        <div class="media align-items-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="d-block ui-w-40 ui-bordered mr-4" alt="" />
                                            <div class="media-body">
                                                <a href="/" class="d-block text-dark">Produto 2</a>
                                                <small>
                                                    <span class="text-muted">Cor:</span>
                                                    <span class="ui-product-color ui-product-color-sm align-text-bottom" style={{ background: '#000' }}></span> &nbsp;
                                                    <span class="text-muted">Estoque: </span> 32GB &nbsp;
                                                    <span class="text-muted">Garantia: </span> Standard - 1 year &nbsp;
                                                    <span class="text-muted">Ships from: </span> China
                                                </small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right font-weight-semibold align-middle p-4">$1049.00</td>
                                    <td class="align-middle p-4"><input type="text" class="form-control text-center" value="1" /></td>
                                    <td class="text-right font-weight-semibold align-middle p-4">$1049.00</td>
                                    <td class="text-center align-middle px-0"><a href="/" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
                                </tr>

                                <tr>
                                    <td class="p-4">
                                        <div class="media align-items-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="d-block ui-w-40 ui-bordered mr-4" alt="" />
                                            <div class="media-body">
                                                <a href="/" class="d-block text-dark">Produto 3</a>
                                                <small>
                                                    <span class="text-muted">Ships from: </span> Germany
                                                </small>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-right font-weight-semibold align-middle p-4">$20.55</td>
                                    <td class="align-middle p-4"><input type="text" class="form-control text-center" value="1" /></td>
                                    <td class="text-right font-weight-semibold align-middle p-4">$20.55</td>
                                    <td class="text-center align-middle px-0"><a href="/" class="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>


                    <div class="d-flex flex-wrap justify-content-between align-items-center pb-4">
                        <div class="mt-4">

                        </div>
                        <div class="d-flex">
                            <div class="text-right mt-4 mr-5">

                            </div>
                            <div class="text-right mt-4">
                                <label class="text-muted font-weight-normal m-0">Total price</label>
                                <div class="text-large"><strong>$1164.65</strong></div>
                            </div>
                        </div>
                    </div>

                    <div class="float-right bt2">
                    <button type="button" class="btn btn-outline-danger">Voltar para a loja</button>
                        <button type="button" class="btn btn-outline-success">Finalizar pedido</button>
                   </div>
                   
                   

                </div>
            </div>
        </div>

    </>);
}