<template>
<!-- Nav Item - Alerts -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-bell fa-fw"></i>
                                <!-- Counter - Alerts -->
                                     <span class="badge badge-danger badge-counter">{{alerts?alerts.length:0}}</span>
                            </a>
                            <!-- Dropdown - Alerts -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="alertsDropdown">
                                <h6 class="dropdown-header">
                                    Alerts Center
                                </h6>
                                <div class="" v-for="alert in alerts" v-bind:key="alert.id">
                                <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="mr-3">
                                        <div class="icon-circle {{alert.button-bg}}">
                                            <i class="fas {{alert.icon}}"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="small text-gray-500">{{alert.date}}</div>
                                        <span class="font-weight-bold">{{alert.subject}}</span>
                                    </div>
                                </a>
                                </div>
                                
                                
                                
                                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                            </div>
                        </li>
</template>


<script>

import alertsJson from '../assets/Alerts.json';

export default{
    name:'AlertCenter',
    alerts:[],
    created(){
        this.alerts = alertsJson;
    }
}

</script>