import Button from "../../common/Button";

const Container = () => {
	return (
		<div>
			<div className="AddressTitle">
				<div className="AddressTitle1">
					<input type="radio" />
					<h2>Huzefa Bagwala</h2>

					<p className="AddressType"> HOME</p>
				</div>

				<div className="AddressButtons">
					<button>
						<a href="#">EDIT</a>
					</button>
					<Button variant="unfilled">
						<a href="#">Remove</a>
					</Button>
				</div>
			</div>

			<div className="Address-Content">
				<p>1131 Dusty Townline,Jacksonville,TX 40322</p>

				<p>Contact : (936)361-0310</p>
			</div>

			<div>
				<div className="AddressTitle">
					<div className="AddressTitle1">
						<input type="radio" />
						<h3>IndiaTech</h3>

						<p className="AddressType">
							OFFICE
						</p>
					</div>
					<div className="AddressButtons">
						<button>
							<a href="#">EDIT</a>
						</button>
						<Button variant="unfilled">
							<a href="#">Remove</a>
						</Button>
					</div>
				</div>
				<div className="Address-Content">
					<p>
						1219 Harvest
						Path,Jacksonville,TX 40322
					</p>

					<p>Contact : (936)361-0310</p>
				</div>
			</div>
		</div>
	);
};
export default Container;
