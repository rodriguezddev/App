<template>
<div style="max-width:350px;margin-left:auto; margin-right:auto;">
    <router-link to='/Banca'>
        <span class="iconify" data-icon="ic:round-arrow-back-ios" data-inline="false" style="width:10%; margin-bottom: -25px;"></span>
    </router-link>
    <p style="text-align:center; margin:0; font-size: 17px; font-family:HelveticaNeue;">Operaciones de la cuenta</p>
    <div style="margin-top: 5rem;">
        <div style="display:flex; justify-content:space-between; padding: 0 1rem;">
            <p style="margin:0; font-family: GalanoGrotesque; margin-right: 55px;">Tipo</p>
            <p style="margin:0; font-family: GalanoGrotesque;">Monto</p>
        </div>
        <div style="background-color: rgb(245, 244, 244);     padding-bottom: 1rem;">
            <div v-for="productos in producto" style="margin-top: 10px;padding: 0 1rem; border-radius: 5px; background-color: #fff; padding: 0 10px; display:flex; justify-content:space-between; height: 70px; align-items: center; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                <p style="margin:0; font-family: HelveticaNeue; flex-basis:calc(70% - 1rem);"> {{productos.name}}</p>
                <p style=" font-family: HelveticaNeue; margin: 0px 0px 0px 30px; font-size: 17.5px;">S/.{{productos.precio}}</p>
            </div>
            <div style="background-color: #fff; padding: 10px; padding-top: 2rem;
    margin-top: 10px; -webkit-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); -moz-box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75); box-shadow: 0px 0px 22px -13px rgba(0,0,0,0.75);">
                <div>
                    <div style="display:flex; justify-content:space-between; align-items: center; margin: 0 2rem;     padding-bottom: 10px; border-bottom: solid 1px; height: 50px;">
                        <div>
                            <p style="margin:0; font-family:HelveticaNeue;">Gonzalo Meza</p>
                            <p style="margin:0; font-family:HelveticaNeue;">55454 555555555555</p>
                        </div>

                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 796 1096" style="enable-background:new 0 0 596 796; width:55px; margin-top: 3rem;" xml:space="preserve">
                            <g>
                                <path d="m442.392 250.164c12.091-.464 21.786-10.439 21.786-22.642v-16.76h12.328c9.646 0 17.495-7.848 17.495-17.495v-27.407-22.215c0-12.152-6.672-23.235-17.413-28.923l-82.953-43.923c-3.66-1.939-8.199-.542-10.138 3.118-1.938 3.661-.542 8.2 3.118 10.138l82.953 43.922c5.818 3.081 9.433 9.084 9.433 15.667v14.715h-446v-14.746c0-6.569 3.604-12.566 9.404-15.651l211.783-112.631c.825-.438 1.808-.438 2.631-.003l106.457 56.368c3.663 1.941 8.2.542 10.138-3.118 1.938-3.661.542-8.2-3.118-10.138l-106.459-56.368c-5.228-2.768-11.468-2.763-16.691.016l-211.783 112.63c-10.709 5.695-17.361 16.767-17.361 28.895v22.246 27.407c0 9.647 7.849 17.495 17.495 17.495h13.356v16.76c0 12.203 9.695 22.179 21.786 22.642v46.356c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-10.953h38.479v98.218h-38.479v-57.671c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v94.085c-12.091.463-21.786 10.439-21.786 22.641v16.761h-12.495c-10.122 0-18.356 8.234-18.356 18.356v26.546c0 4.143 3.357 7.5 7.5 7.5h461c4.143 0 7.5-3.357 7.5-7.5v-26.546c0-10.122-8.234-18.356-18.356-18.356h-11.467v-16.761c0-12.202-9.695-22.177-21.786-22.641v-170.034zm-370.876-14.978c-4.226 0-7.663-3.438-7.663-7.664v-16.76h82.053v16.76c0 4.226-3.438 7.664-7.664 7.664zm149.74 185.013c-12.092.463-21.787 10.439-21.787 22.641v16.76h-38.563v-16.761c0-12.202-9.695-22.178-21.787-22.641v-170.034c12.092-.463 21.787-10.439 21.787-22.642v-16.76h38.563v16.76c0 12.203 9.695 22.179 21.787 22.642zm152.655 0c-12.091.464-21.786 10.439-21.786 22.641v16.76h-40.604v-16.761c0-12.202-9.695-22.178-21.786-22.641v-170.034c12.091-.463 21.786-10.439 21.786-22.642v-16.76h40.604v16.76c0 12.203 9.695 22.178 21.786 22.642zm15-21.414h38.48v20.381h-38.48zm0-15v-98.218h38.48v98.218zm38.481-113.218h-38.48v-20.381h38.48zm-191.136 128.218h38.479v20.381h-38.479zm38.48-15h-38.479v-98.218h38.479zm0-113.218h-38.479v-20.381h38.479zm14.123 164.609c4.226 0 7.663 3.438 7.663 7.663v16.761h-82.053v-16.761c0-4.226 3.438-7.663 7.664-7.663zm-66.726-199.99c-4.226 0-7.664-3.438-7.664-7.664v-16.76h82.053v16.76c0 4.226-3.438 7.664-7.663 7.664zm-136.494 35.381v-20.381h38.479v20.381zm38.479 128.218v20.381h-38.479v-20.381zm14.124 36.391c4.226 0 7.664 3.438 7.664 7.663v16.761h-82.053v-16.761c0-4.226 3.437-7.663 7.663-7.663zm337.403 39.424c1.851 0 3.356 1.506 3.356 3.356v19.046h-446v-19.046c0-1.851 1.506-3.356 3.356-3.356zm-34.131-39.424c4.226 0 7.664 3.438 7.664 7.663v16.761h-82.053v-16.761c0-4.226 3.438-7.663 7.664-7.663zm-66.725-199.99c-4.226 0-7.664-3.438-7.664-7.664v-16.76h82.053v16.76c0 4.226-3.438 7.664-7.664 7.664zm-339.293-39.424c-1.376 0-2.495-1.119-2.495-2.495v-19.907h446v19.907c0 1.376-1.119 2.495-2.495 2.495z"></path>
                                <path d="m237.48 132.007v2.169c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-2.169h6.428v2.169c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-2.9c9.978-2.577 17.37-11.664 17.37-22.502 0-7.723-3.804-14.569-9.633-18.778 2.344-3.631 3.711-7.957 3.711-12.609 0-8.498-4.605-15.937-11.448-19.964v-5.357c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v2.168h-6.428v-2.168c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v2.168h-10.266c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5h1.695v47.773h-1.695c-4.143 0-7.5 3.358-7.5 7.5s3.357 7.5 7.5 7.5zm30.644-31.387c4.496 0 8.153 3.658 8.153 8.234 0 4.496-3.657 8.153-8.153 8.153h-24.215v-16.387zm-24.215-31.386h18.293c4.496 0 8.153 3.657 8.153 8.234 0 4.496-3.657 8.153-8.153 8.153h-18.293z"></path>
                            </g>
                        </svg>
                    </div>
                </div>

                <div style="display:flex; justify-content:space-between; align-items: center;   border-radius: 5px;  height: 120px; padding: 10px;">
                    <img src="@/assets/bcp.png" alt="" style="width:30%;">
                    <h1 style="font-size:30px; font-family:GalanoGrotesque">S./11777</h1>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Operaciones',
    data() {
        return {
            producto: [{
                    name: 'Entre cuentas',
                    precio: 2.50,

                },
                {
                    name: 'Entre cuentas',
                    precio: 2.50,

                },
                {
                    name: 'Entre cuentas',
                    precio: 2.50,

                },
            ]
        }
    }
}
</script>
