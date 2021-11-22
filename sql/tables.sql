create table route(
    id serial not null primary key, 
    name text not null,
    price decimal
);

create table taxi(
    id serial not null primary key, 
    reg_number text not null unique,
    trip_counter int
);

create table region(
    id serial not null primary key, 
    name text not null
);

create table trip(
    id serial not null primary key,
    trip_counter int
    route_id int,
    taxi_id int,
    region_id int,
    
    foreign key (route_id) references route(id),
	foreign key (taxi_id) references taxi(id),
    foreign key (region_id) references region(id)
);