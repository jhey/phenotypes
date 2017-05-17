PROJECT=phenotypes${UNIQUE_BUILD_ID}
COMPOSE_ARGS=-f docker-compose.yml -p ${PROJECT}
PROD_COMPOSE_ARGS=${COMPOSE_ARGS} -f docker-compose.prod.yml

build:
	docker-compose ${PROD_COMPOSE_ARGS} build

run:
	docker-compose ${PROD_COMPOSE_ARGS} up

dev:
	docker-compose ${COMPOSE_ARGS} up

clean:
	docker-compose ${COMPOSE_ARGS} down

shell:
	docker-compose ${COMPOSE_ARGS} run --rm fractal bash
