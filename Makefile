PROJECT=phenotypes${UNIQUE_BUILD_ID}
COMPOSE_ARGS=-f docker-compose.yml -f docker-compose.prod.yml -p ${PROJECT}

build:
	docker-compose ${COMPOSE_ARGS} build

run:
	docker-compose ${COMPOSE_ARGS} up

clean:
	docker-compose ${COMPOSE_ARGS} down
