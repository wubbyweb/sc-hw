module hello_world_addr::hello_world;

use sui::object::{Self, UID};
use sui::transfer;
use sui::tx_context::{Self, TxContext};
use std::string;

public struct HelloWorld has key, store {
    id: UID,
    text: string::String,
}

public fun create(ctx: &mut TxContext): HelloWorld {
    HelloWorld {
        id: object::new(ctx),
        text: string::utf8(b"Hello World"),
    }
}

public entry fun mint(ctx: &mut TxContext) {
    transfer::transfer(create(ctx), tx_context::sender(ctx));
}