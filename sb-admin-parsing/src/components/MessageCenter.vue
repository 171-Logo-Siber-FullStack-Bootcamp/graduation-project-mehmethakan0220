<template>
<!-- Nav Item - Messages -->
                        <li class="nav-item dropdown no-arrow mx-1">
                            <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-envelope fa-fw"></i>
                                <!-- Counter - Messages -->
                                <span class="badge badge-danger badge-counter">{{messages.length}}</span>
                            </a>
                            <!-- Dropdown - Messages -->
                            <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                aria-labelledby="messagesDropdown">
                                <h6 class="dropdown-header">
                                    Message Center
                                </h6>


                                <!-- message iterator -->
                                <div v-for="message in messages" :key="message.id" >
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                    <div class="dropdown-list-image mr-3">
                                        <img class="rounded-circle" src="{{message.img}}"
                                            alt="...">
                                        <div class="status-indicator bg-success"></div>
                                    </div>
                                    <div>
                                        <div class="text-truncate">{{message.message}}</div>
                                        <div class="small text-gray-500">{{message.sender}} · {{message.ago}}</div>
                                    </div>
                                </a>
                                </div>



                                <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                            </div>
                        </li>
</template>

<script>

import messagesJson from '../assets/Messages.json';

export default{
    name:'MessageCenter',
    messages:[],
    created(){
        this.messages = messagesJson;
    }
}

</script>