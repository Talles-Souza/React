import React from "react";

export const Paginacao = () => {
  return (<>
    <nav aria-label="Navegação de página exemplo">
      <ul class="pagination justify-content-end">
        <li class="page-item"><a class="page-link" href="/">1</a></li>
        <li class="page-item"><a class="page-link" href="/inicio">2</a></li>
        <li class="page-item"><a class="page-link" href="/inicio2">3</a></li>
      </ul>
    </nav>
  </>);
}