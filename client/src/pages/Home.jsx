import { React, useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { DisplayCampaign } from '../components';
const Home = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaign, setCampaign] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  const fetchCampaigns = async () => {
    setisLoading(true);
    const data = await getCampaigns();
    setCampaign(data);
    setisLoading(false);
  };
  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <DisplayCampaign 
    title="All Campaigns"
    isLoading={isLoading}
    campaigns={campaign}
    
    />
  );
};

export default Home;
