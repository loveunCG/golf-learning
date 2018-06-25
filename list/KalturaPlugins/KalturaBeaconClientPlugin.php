<?php
// ===================================================================================================
//                           _  __     _ _
//                          | |/ /__ _| | |_ _  _ _ _ __ _
//                          | ' </ _` | |  _| || | '_/ _` |
//                          |_|\_\__,_|_|\__|\_,_|_| \__,_|
//
// This file is part of the Kaltura Collaborative Media Suite which allows users
// to do with audio, video, and animation what Wiki platfroms allow them to do with
// text.
//
// Copyright (C) 2006-2018  Kaltura Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//
// @ignore
// ===================================================================================================

/**
 * @package Kaltura
 * @subpackage Client
 */
require_once(dirname(__FILE__) . "/../KalturaClientBase.php");
require_once(dirname(__FILE__) . "/../KalturaEnums.php");
require_once(dirname(__FILE__) . "/../KalturaTypes.php");
require_once(dirname(__FILE__) . "/KalturaElasticSearchClientPlugin.php");

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconIndexType extends KalturaEnumBase
{
	const LOG = "Log";
	const STATE = "State";
}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconObjectTypes extends KalturaEnumBase
{
	const SCHEDULE_RESOURCE_BEACON = "1";
	const ENTRY_SERVER_NODE_BEACON = "2";
	const SERVER_NODE_BEACON = "3";
	const ENTRY_BEACON = "4";
}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconOrderBy extends KalturaEnumBase
{
	const OBJECT_ID_ASC = "+objectId";
	const UPDATED_AT_ASC = "+updatedAt";
	const OBJECT_ID_DESC = "-objectId";
	const UPDATED_AT_DESC = "-updatedAt";
}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeacon extends KalturaObjectBase
{
	/**
	 * Beacon id
	 *
	 * @var string
	 * @readonly
	 */
	public $id = null;

	/**
	 * Beacon indexType
	 *
	 * @var string
	 * @readonly
	 */
	public $indexType = null;

	/**
	 * Beacon update date as Unix timestamp (In seconds)
	 *
	 * @var int
	 * @readonly
	 */
	public $updatedAt = null;

	/**
	 * The object which this beacon belongs to
	 *
	 * @var KalturaBeaconObjectTypes
	 */
	public $relatedObjectType = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $eventType = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $objectId = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $privateData = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $rawData = null;


}

/**
 * @package Kaltura
 * @subpackage Client
 */
abstract class KalturaBeaconBaseFilter extends KalturaFilter
{
	/**
	 * 
	 *
	 * @var int
	 */
	public $updatedAtGreaterThanOrEqual = null;

	/**
	 * 
	 *
	 * @var int
	 */
	public $updatedAtLessThanOrEqual = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $relatedObjectTypeIn = null;

	/**
	 * 
	 *
	 * @var KalturaBeaconObjectTypes
	 */
	public $relatedObjectTypeEqual = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $eventTypeIn = null;

	/**
	 * 
	 *
	 * @var string
	 */
	public $objectIdIn = null;


}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconEnhanceFilter extends KalturaFilter
{
	/**
	 * 
	 *
	 * @var string
	 */
	public $externalElasticQueryObject = null;

	/**
	 * 
	 *
	 * @var KalturaBeaconIndexType
	 */
	public $indexTypeEqual = null;


}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconListResponse extends KalturaListResponse
{
	/**
	 * 
	 *
	 * @var array of KalturaBeacon
	 * @readonly
	 */
	public $objects;


}

/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconFilter extends KalturaBeaconBaseFilter
{
	/**
	 * 
	 *
	 * @var KalturaBeaconIndexType
	 */
	public $indexTypeEqual = null;


}


/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconService extends KalturaServiceBase
{
	function __construct(KalturaClient $client = null)
	{
		parent::__construct($client);
	}

	/**
	 * 
	 * 
	 * @param KalturaBeacon $beacon 
	 * @param int $shouldLog 
	 * @return bool
	 */
	function add(KalturaBeacon $beacon, $shouldLog = 0)
	{
		$kparams = array();
		$this->client->addParam($kparams, "beacon", $beacon->toParams());
		$this->client->addParam($kparams, "shouldLog", $shouldLog);
		$this->client->queueServiceActionCall("beacon_beacon", "add", $kparams);
		if ($this->client->isMultiRequest())
			return $this->client->getMultiRequestResult();
		$resultObject = $this->client->doQueue();
		$this->client->throwExceptionIfError($resultObject);
		$resultObject = (bool) $resultObject;
		return $resultObject;
	}

	/**
	 * 
	 * 
	 * @param KalturaBeaconEnhanceFilter $filter 
	 * @param KalturaFilterPager $pager 
	 * @return KalturaBeaconListResponse
	 */
	function enhanceSearch(KalturaBeaconEnhanceFilter $filter = null, KalturaFilterPager $pager = null)
	{
		$kparams = array();
		if ($filter !== null)
			$this->client->addParam($kparams, "filter", $filter->toParams());
		if ($pager !== null)
			$this->client->addParam($kparams, "pager", $pager->toParams());
		$this->client->queueServiceActionCall("beacon_beacon", "enhanceSearch", $kparams);
		if ($this->client->isMultiRequest())
			return $this->client->getMultiRequestResult();
		$resultObject = $this->client->doQueue();
		$this->client->throwExceptionIfError($resultObject);
		$this->client->validateObjectType($resultObject, "KalturaBeaconListResponse");
		return $resultObject;
	}

	/**
	 * 
	 * 
	 * @param KalturaBeaconFilter $filter 
	 * @param KalturaFilterPager $pager 
	 * @return KalturaBeaconListResponse
	 */
	function listAction(KalturaBeaconFilter $filter = null, KalturaFilterPager $pager = null)
	{
		$kparams = array();
		if ($filter !== null)
			$this->client->addParam($kparams, "filter", $filter->toParams());
		if ($pager !== null)
			$this->client->addParam($kparams, "pager", $pager->toParams());
		$this->client->queueServiceActionCall("beacon_beacon", "list", $kparams);
		if ($this->client->isMultiRequest())
			return $this->client->getMultiRequestResult();
		$resultObject = $this->client->doQueue();
		$this->client->throwExceptionIfError($resultObject);
		$this->client->validateObjectType($resultObject, "KalturaBeaconListResponse");
		return $resultObject;
	}
}
/**
 * @package Kaltura
 * @subpackage Client
 */
class KalturaBeaconClientPlugin extends KalturaClientPlugin
{
	/**
	 * @var KalturaBeaconService
	 */
	public $beacon = null;

	protected function __construct(KalturaClient $client)
	{
		parent::__construct($client);
		$this->beacon = new KalturaBeaconService($client);
	}

	/**
	 * @return KalturaBeaconClientPlugin
	 */
	public static function get(KalturaClient $client)
	{
		return new KalturaBeaconClientPlugin($client);
	}

	/**
	 * @return array<KalturaServiceBase>
	 */
	public function getServices()
	{
		$services = array(
			'beacon' => $this->beacon,
		);
		return $services;
	}

	/**
	 * @return string
	 */
	public function getName()
	{
		return 'beacon';
	}
}

